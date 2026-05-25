'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/login');
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      className="px-3 py-1.5 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors text-sm font-medium"
    >
      Sign out
    </button>
  );
}
