import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { PasswordInput } from "./PasswordInput";
import { SocialButton } from "./SocialButtons";
import { LoginFormData } from "../types/authTypes";

// Login Form Component
interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void;
  onForgotPassword: () => void;
  onSocialLogin: (provider: 'google' | 'facebook') => void;
}


export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, onForgotPassword, onSocialLogin }) => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <Card className="w-full max-w-md mx-auto border-gray-200">
      <CardHeader className="text-center space-y-4 pb-6">
        <CardTitle className="text-3xl font-bold text-blue-900">Welcome Back!</CardTitle>
        <p className="text-gray-600">Sign in to continue to FoodHub</p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-600">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              placeholder="example@email.com"
              className="h-12"
              required
            />
          </div>

          {/* Password Field */}
          <PasswordInput
            value={formData.password}
            onChange={(value) => setFormData(prev => ({ ...prev, password: value }))}
            placeholder="••••••••"
          />

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={formData.rememberMe}
                onCheckedChange={(checked) => 
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  setFormData((prev: any) => ({ ...prev, rememberMe: checked as boolean }))
                }
                className="border-blue-900"
              />
              <Label htmlFor="remember" className="text-sm text-gray-600">
                Remember me
              </Label>
            </div>
            <Button
              type="button"
              variant="link"
              className="text-blue-900 p-0 h-auto"
              onClick={onForgotPassword}
            >
              Forgot Password?
            </Button>
          </div>

          {/* Login Button */}
          <Button 
            onClick={handleSubmit} 
            className="w-full h-12 bg-green-500 hover:bg-green-600 text-white font-semibold"
          >
            Login
          </Button>
        </div>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-600">or</span>
          </div>
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-4">
          <SocialButton provider="google" onClick={() => onSocialLogin('google')} />
          <SocialButton provider="facebook" onClick={() => onSocialLogin('facebook')} />
        </div>
      </CardContent>
    </Card>
  );
};