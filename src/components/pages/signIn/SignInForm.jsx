
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { GrKey } from "react-icons/gr";
import { motion as Motion } from "framer-motion";
import mainLogo from "../../../assets/mainLogo.png";
import AuthInput from "../../ui/AuthInput";

const initialValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const navigate = useNavigate();

  const loginSchema = Yup.object({
    email: Yup.string().email("ايميل غير صحيح").required("الايميل مطلوب"),
    password: Yup.string()
      .min(6, "يجب أن تكون كلمة السر 6 خانات على الأقل")
      .required("كلمة السر مطلوبة"),
  });

  const handleSubmit = async (values) => {
    const toastId = toast.loading("جاري تسجيل الدخول...");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Login failed");

      toast.success("تم تسجيل الدخول بنجاح!", { id: toastId });
      // redirect user
      navigate("/clients/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      toast.error("فشل تسجيل الدخول. حاول مرة أخرى.", { id: toastId });
    }
  };

  return (
    <Motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-100 w-full mx-auto p-6 shadow rounded z-20"
    >
      <img
        src={mainLogo}
        alt="Logo"
        className="z-10 -mt-20 mx-auto object-cover"
      />
      <h2 className="text-xl font-bold text-white mb-4 text-center mt-10">
        تسجيل الدخول
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4 w-full">
            <div>
              <AuthInput>
                <MdOutlineAlternateEmail className=" text-xl" />
                <Field
                  type="email"
                  name="email"
                  placeholder="الإيميل"
                  autoComplete="off"
                  className="w-full outline-none border-none bg-transparent text-secondary-400 placeholder-gray-400"
                />
              </AuthInput>
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <AuthInput>
                <GrKey className=" text-xl " />
                <Field
                  type="password"
                  name="password"
                  placeholder="كلمة السر"
                  autoComplete="off"
                  className="w-full outline-none border-none bg-transparent text-secondary-400 placeholder-gray-400"
                />
              </AuthInput>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-secondary-400 text-secondary py-2 rounded hover:bg-secondary-300 disabled:bg-gray-500"
            >
              {isSubmitting ? "جاري التسجيل..." : "تسجيل الدخول"}
            </button>
          </Form>
        )}
      </Formik>
    </Motion.div>
  );
};

export default SignInForm;
