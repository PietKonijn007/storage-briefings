#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';
import { createInterface } from 'readline';

const USERS_FILE = path.join(process.cwd(), 'users.json');

function loadUsers() {
  if (!fs.existsSync(USERS_FILE)) return [];
  return JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
}

function saveUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2) + '\n');
}

function prompt(question) {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

const command = process.argv[2];

if (command === 'add') {
  const email = process.argv[3] || (await prompt('Email: '));
  const password = process.argv[4] || (await prompt('Password: '));

  if (!email || !password) {
    console.error('Usage: node scripts/add-user.js add <email> <password>');
    process.exit(1);
  }

  const users = loadUsers();

  if (users.find((u) => u.email.toLowerCase() === email.toLowerCase())) {
    console.error(`User ${email} already exists. Use "update" to change password.`);
    process.exit(1);
  }

  const passwordHash = await bcrypt.hash(password, 12);
  users.push({ email: email.toLowerCase(), passwordHash });
  saveUsers(users);
  console.log(`Added user: ${email}`);

} else if (command === 'update') {
  const email = process.argv[3] || (await prompt('Email: '));
  const password = process.argv[4] || (await prompt('New password: '));

  if (!email || !password) {
    console.error('Usage: node scripts/add-user.js update <email> <password>');
    process.exit(1);
  }

  const users = loadUsers();
  const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

  if (!user) {
    console.error(`User ${email} not found.`);
    process.exit(1);
  }

  user.passwordHash = await bcrypt.hash(password, 12);
  saveUsers(users);
  console.log(`Updated password for: ${email}`);

} else if (command === 'remove') {
  const email = process.argv[3] || (await prompt('Email: '));

  if (!email) {
    console.error('Usage: node scripts/add-user.js remove <email>');
    process.exit(1);
  }

  const users = loadUsers();
  const filtered = users.filter((u) => u.email.toLowerCase() !== email.toLowerCase());

  if (filtered.length === users.length) {
    console.error(`User ${email} not found.`);
    process.exit(1);
  }

  saveUsers(filtered);
  console.log(`Removed user: ${email}`);

} else if (command === 'list') {
  const users = loadUsers();
  if (users.length === 0) {
    console.log('No users.');
  } else {
    users.forEach((u) => console.log(`  ${u.email}`));
  }

} else {
  console.log(`Usage: node scripts/add-user.js <command>

Commands:
  add    <email> <password>    Add a new user
  update <email> <password>    Update a user's password
  remove <email>               Remove a user
  list                         List all users`);
}
