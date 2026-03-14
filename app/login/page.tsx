import { login, signup } from "./actions";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ message: string }>;
}) {
  const params = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-gray-50">
      <form className="flex w-full max-w-md flex-col gap-4 rounded-xl bg-white p-8 shadow-lg border border-gray-100">
        <h1 className="text-2xl font-bold text-center mb-2 text-gray-900">Aijen Inventory</h1>
        <p className="text-sm text-center text-gray-500 mb-6">Enter your details to access your warehouse.</p>
        
        {params?.message && (
          <p className="p-4 bg-red-50 text-red-600 text-sm rounded-md text-center">
            {params.message}
          </p>
        )}

        <label className="text-sm font-medium text-gray-700" htmlFor="email">Email</label>
        <input 
          id="email" 
          name="email" 
          type="email" 
          required 
          className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-black outline-none" 
          placeholder="staff@sme.co.ug"
        />

        <label className="text-sm font-medium text-gray-700 mt-2" htmlFor="password">Password</label>
        <input 
          id="password" 
          name="password" 
          type="password" 
          required 
          className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-black outline-none" 
          placeholder="••••••••"
        />

        <div className="flex flex-col gap-3 mt-6">
          <button formAction={login} className="bg-black text-white font-medium p-3 rounded-md hover:bg-gray-800 transition-colors">
            Sign In
          </button>
          <button formAction={signup} className="bg-white text-black font-medium p-3 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}
