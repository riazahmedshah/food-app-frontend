import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { PasswordInput } from "./PasswordInput";
import { Button } from "@/components/ui/button";
import { SocialButton } from "./SocialButtons";
import { SignUpFormData } from "../types/authTypes";

// Sign Up Form Component
interface SignUpFormProps {
  onSubmit: (data: SignUpFormData) => void;
  onSocialLogin: (provider: 'google' | 'facebook') => void;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit, onSocialLogin }) => {
  const [formData, setFormData] = useState<SignUpFormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState<Partial<SignUpFormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<SignUpFormData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto border-gray-200">
      <CardHeader className="text-center space-y-4 pb-6">
        <CardTitle className="text-3xl font-bold text-blue-900">Create an Account</CardTitle>
        <p className="text-gray-600">Join FoodHub and start ordering!</p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {/* Full Name Field */}
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-gray-600">Full Name</Label>
            <Input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
              placeholder="Enter your full name"
              className="h-12"
              required
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="signupEmail" className="text-gray-600">Email Address</Label>
            <Input
              id="signupEmail"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              placeholder="example@email.com"
              className="h-12"
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Password Field */}
          <div>
            <PasswordInput
              id="signupPassword"
              value={formData.password}
              onChange={(value) => setFormData(prev => ({ ...prev, password: value }))}
              placeholder="Create a password"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password Field */}
          <div>
            <PasswordInput
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={(value) => setFormData(prev => ({ ...prev, confirmPassword: value }))}
              placeholder="Confirm your password"
              label="Confirm Password"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>

          {/* Sign Up Button */}
          <Button 
            onClick={handleSubmit}
            className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-semibold"
          >
            Create Account
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