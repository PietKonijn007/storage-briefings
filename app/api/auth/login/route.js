import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';
import { createSessionToken, sessionCookieOptions } from '../../../../lib/auth';

function loadUsers() {
  const filePath = path.join(process.cwd(), 'users.json');
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

export async function POST(request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
  }

  const users = loadUsers();
  const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
  }

  const token = await createSessionToken(user.email);
  const cookieOpts = sessionCookieOptions();

  const response = NextResponse.json({ ok: true });
  response.cookies.set(cookieOpts.name, token, cookieOpts);
  return response;
}
