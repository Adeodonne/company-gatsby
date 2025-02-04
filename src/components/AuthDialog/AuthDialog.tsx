import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {ThunkDispatch} from "@reduxjs/toolkit";

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {Tabs, TabsContent} from "@/components/ui/tabs";
import {Dialog, DialogContent} from "@/components/ui/dialog";
import {LoginPayload, loginUser} from "@/features/user/services/loginUser";
import {RegisterPayload, registerUser} from "@/features/user/services/registerUser";

const AuthDialog = ({
                        open,
                        setOpen,
                        activeTab,
                        setActiveTab,
                    }: {
    open: boolean;
    setOpen: (state: boolean) => void;
    activeTab: "LogIn" | "Register";
    setActiveTab: (state: "LogIn" | "Register") => void;
}) => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    const {
        register: registerLogin,
        handleSubmit: handleSubmitLogin,
        formState: {errors: loginErrors},
    } = useForm<LoginPayload>();

    const {
        register: registerRegister,
        handleSubmit: handleSubmitRegister,
        formState: {errors: registerErrors},
    } = useForm<RegisterPayload>();

    const onSubmitLogIn = async (data: any) => {
        await dispatch(loginUser({identifier: data.email, password: data.password}));
        setOpen(false);
    };

    const onSubmitRegister = async (data: any) => {
        await dispatch(registerUser({username: data.name, email: data.email, password: data.password}));
        setOpen(false);
    };

    const FormError = ({message}: { message: string }) => (
        <p className="text-red-500 text-sm">{message}</p>
    );

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="w-[50%] bg-white p-6 rounded-lg shadow-lg">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsContent value="LogIn">
                        <p className="font-poppins text-4xl font-extrabold text-center">Log in</p>
                        <form onSubmit={handleSubmitLogin(onSubmitLogIn)} className="space-y-4">
                            <Input
                                placeholder="Email"
                                {...registerLogin("email", {required: "Email is required"})}
                                label="Your email"
                            />
                            {loginErrors.email && <FormError message={loginErrors.email.message}/>}

                            <Input
                                type="password"
                                placeholder="Password"
                                {...registerLogin("password", {required: "Password is required"})}
                                label="Your password"
                            />
                            {loginErrors.password && <FormError message={loginErrors.password.message}/>}

                            <Button type="submit" className="bg-black text-white rounded-3xl">
                                Log in
                            </Button>

                            <p className="text-[14px] font-medium text-center">
                                Don't have an account?
                                <span
                                    className="text-blue-500 ml-2 underline cursor-pointer"
                                    onClick={() => setActiveTab("Register")}
                                >
                                  Register
                                </span>
                            </p>
                        </form>
                    </TabsContent>

                    <TabsContent value="Register">
                        <p className="font-poppins text-4xl font-extrabold text-center">Register</p>
                        <form onSubmit={handleSubmitRegister(onSubmitRegister)} className="space-y-4">
                            <Input
                                placeholder="Full Name"
                                {...registerRegister("name", {required: "Name is required"})}
                                label="Full Name"
                            />
                            {registerErrors.name && <FormError message={registerErrors.name.message}/>}

                            <Input
                                placeholder="Email"
                                {...registerRegister("email", {required: "Email is required"})}
                                label="Your email"
                            />
                            {registerErrors.email && <FormError message={registerErrors.email.message}/>}

                            <Input
                                type="password"
                                placeholder="Password"
                                {...registerRegister("password", {required: "Password is required"})}
                                label="Password"
                            />
                            {registerErrors.password && <FormError message={registerErrors.password.message}/>}

                            <Input
                                placeholder="Phone"
                                {...registerRegister("phone", {required: "Phone number is required"})}
                                label="Your Phone"
                            />
                            {registerErrors.phone && <FormError message={registerErrors.phone.message}/>}

                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    {...registerRegister("agree", {
                                        required: "You must agree to the Privacy Policy",
                                    })}
                                />
                                <label className="text-sm">
                                    Yes, I have read and agree to the
                                    <a href="/privacy-policy" className="text-blue-500 ml-1 underline">
                                        Privacy Policy
                                    </a>
                                </label>
                            </div>
                            {registerErrors.agree && <FormError message={registerErrors.agree.message}/>}

                            <Button type="submit" className="bg-black text-white rounded-3xl">
                                Register
                            </Button>

                            <p className="text-[14px] font-medium text-center">
                                Already have an account?
                                <span
                                    className="text-blue-500 ml-2 underline cursor-pointer"
                                    onClick={() => setActiveTab("LogIn")}
                                >
                  Log in
                </span>
                            </p>
                        </form>
                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog>
    );
};

export default AuthDialog;