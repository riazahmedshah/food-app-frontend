import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"



interface iProps{
    title:string
    subTitle?:string
}

export const Auth = ({title, subTitle}:iProps) => {
    return(
        <div>
            <div className="max-w-[500px] mx-auto my-10 bg-gray-100 rounded-lg">
                <div>
                    <h1>{title}</h1>
                    <h3>{subTitle}</h3>
                    <div className="flex flex-col items-center py-4 space-y-3">
                        <div className="w-full max-w-sm space-y-1.5">
                            <Label htmlFor="Full Name">Full Name</Label>
                            <Input type="text" placeholder="Enter your Full Name." />
                        </div>
                        <div className="w-full max-w-sm space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" placeholder="Email" />
                        </div>
                        <div className="w-full max-w-sm space-y-1.5">
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" placeholder="Password" />
                        </div>
                        <div className="max-w-sm">
                            <p className={buttonVariants({variant:"default"})}>Create Account</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}