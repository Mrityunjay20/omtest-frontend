import { useRef } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { auth, provider } from "../../firebaseConfig";
import axios from "axios";
import { sendPasswordResetEmail } from "firebase/auth";
import { apiString } from "../../services/apicalls";

export default function ForgotPasswordDialog() {
  const [open, setOpen] = useState(false);
  const [emailSent, setEmailSent] = useState(null);
  const handleOpen = () => setOpen((cur) => !cur);
  const emailRef = useRef("");

  async function resetPassword() {
    const email = emailRef.current.value;
    try {
      const checkUser = await axios.get(apiString + `/user/${email}`);
      if (checkUser) {
        sendPasswordResetEmail(auth, email);
      }
      setEmailSent("Reset password link has been sent to your email");
    } catch (error) {
      setEmailSent("Invalid email id, refresh the page and try again");
    }
  }

  return (
    <>
      <Button className="my-2" onClick={handleOpen}>
        Forgot Password
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          {emailSent ? (
            <>
              <CardBody className="flex flex-col gap-4">
                <Typography variant="h4" color="blue-gray">
                  {emailSent}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Typography
                  variant="small"
                  className="mt-4 flex justify-center"
                >
                  Don&apos;t have an account?
                  <Typography
                    as="a"
                    href="/signup"
                    variant="small"
                    color="blue-gray"
                    className="ml-1 font-bold"
                    onClick={handleOpen}
                  >
                    Sign up
                  </Typography>
                </Typography>
              </CardFooter>
            </>
          ) : (
            <>
              <CardBody className="flex flex-col gap-4">
                <Typography variant="h4" color="blue-gray">
                  Reset your password
                </Typography>
                <Typography
                  className="mb-3 font-normal"
                  variant="paragraph"
                  color="gray"
                >
                  Enter your email to reset your password.
                </Typography>
                <input
                  ref={emailRef}
                  className="border-gray-700 focus:border-gray-900 placeholder-gray-700 text-gray-900 font-medium text-base border-[0.1rem] rounded-md py-2 px-4"
                  label="Email"
                  placeholder="Email"
                  size="lg"
                />
              </CardBody>
              <CardFooter className="pt-0">
                <Button variant="gradient" onClick={resetPassword} fullWidth>
                  Reset
                </Button>
                <Typography
                  variant="small"
                  className="mt-4 flex justify-center"
                >
                  Don&apos;t have an account?
                  <Typography
                    as="a"
                    href="/signup"
                    variant="small"
                    color="blue-gray"
                    className="ml-1 font-bold"
                    onClick={handleOpen}
                  >
                    Sign up
                  </Typography>
                </Typography>
              </CardFooter>
            </>
          )}
        </Card>
      </Dialog>
    </>
  );
}
