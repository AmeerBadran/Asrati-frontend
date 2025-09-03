import ShapesMotion from "../../components/features/ShapesMotion";
import SignInForm from "../../components/pages/signIn/SignInForm"

const SignIn = () => {
  return (
    <div className="relative min-h-screen bg-secondary flex items-center justify-center overflow-hidden">
      <ShapesMotion />
      <SignInForm />
    </div>
  );
};

export default SignIn;
