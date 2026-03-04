import { CustomInput } from "@/components/molecules/CustomInput";
import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
    const {
        handleSubmit,
        control,
        formState: { isSubmitting },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data) => {
        console.log(data);
    };
    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-center mx-auto w-5/12 md:-4/12 xl:w-3/12 space-y-4 p-4 border border-black rounded-xl"
            >
                <h2 className="text-center text-3xl font-bold">Login</h2>
                <p className="text-center ">Welcome to Studance Admin</p>
                <CustomInput
                    name="email"
                    control={control}
                    label="Email"
                    placeholder="email"
                    loading={isSubmitting}
                />
                <CustomInput
                    name="password"
                    control={control}
                    label="Password"
                    placeholder="password"
                    loading={isSubmitting}
                />
                <Button
                    variant="link"
                    className={"w-auto ml-auto text-blue-600"}
                >
                    Forgot Password?
                </Button>
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 bg-black text-white rounded-md"
                >
                    Sign in
                </Button>

                <p className="text-center text-sm">
                    Demo credentials: Any email and password
                </p>
            </form>
        </div>
    );
}
