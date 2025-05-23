import { useState } from "react";
import { AuthHeader } from "../components/AuthHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { LoginForm } from "../components/Login";
import { SignUpForm } from "../components/Signup";
import { LoginFormData, SignUpFormData } from "../types/authTypes";
import axios from "axios"
import { BASE_URL } from "@/utils/constants";




const AuthPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

  const handleLogin = async(data: LoginFormData) => {
    console.log('Login data:', data);
    // Handle login logic here
    const res = await axios.post(`${BASE_URL}/auth/signin`,data,{withCredentials:true})
    console.log(res.data);
    // Example: await loginUser(data);
    alert(`Login attempt with: ${data.email}`);
  };

  const handleSignUp = (data: SignUpFormData) => {
    console.log('Sign up data:', data);
    // Handle sign up logic here
    // Example: await registerUser(data);
    alert(`Sign up attempt with: ${data.email}`);
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
    // Handle forgot password logic here
    // Example: navigate to forgot password page
    alert('Forgot password feature would be implemented here');
  };

  const handleSocialLogin = (provider: 'google' | 'facebook') => {
    console.log(`${provider} login clicked`);
    // Handle social login logic here
    // Example: await socialLogin(provider);
    alert(`${provider} login would be implemented here`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthHeader />
      
      <div className="flex items-center justify-center min-h-screen pt-20 pb-12 px-4">
        <div className="w-full max-w-md">
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'login' | 'signup')}>
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-200 p-1 h-12">
              <TabsTrigger 
                value="login" 
                className="h-10 text-base font-semibold data-[state=active]:bg-blue-900 data-[state=active]:text-white"
              >
                Login
              </TabsTrigger>
              <TabsTrigger 
                value="signup" 
                className="h-10 text-base font-semibold data-[state=active]:bg-blue-900 data-[state=active]:text-white"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="mt-0">
              <LoginForm
                onSubmit={handleLogin}
                onForgotPassword={handleForgotPassword}
                onSocialLogin={handleSocialLogin}
              />
              <div className="text-center mt-6">
                <span className="text-gray-600">Don't have an account? </span>
                <Button
                  variant="link"
                  className="text-orange-500 hover:text-orange-600 p-0 h-auto font-semibold"
                  onClick={() => setActiveTab('signup')}
                >
                  Sign Up
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="signup" className="mt-0">
              <SignUpForm
                onSubmit={handleSignUp}
                onSocialLogin={handleSocialLogin}
              />
              <div className="text-center mt-6">
                <span className="text-gray-600">Already have an account? </span>
                <Button
                  variant="link"
                  className="text-blue-900 hover:text-blue-800 p-0 h-auto font-semibold"
                  onClick={() => setActiveTab('login')}
                >
                  Login
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;