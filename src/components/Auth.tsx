import SocialLogin from "./SocialLogin";

const Auth = () => {
  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-eco-primary mb-6 text-center">
        Welcome to EcoBlock
      </h2>
      <div className="mb-6">
        <SocialLogin />
      </div>
    </div>
  );
};

export default Auth;