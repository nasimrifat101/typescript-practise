import { FaGoogle, FaGithub } from "react-icons/fa";


const SocialLogin = () => {

    const handleGoogleSignIn = () => {

    };

    return (
        <div className="grid grid-cols-2 gap-5">
            <button onClick={handleGoogleSignIn} className="btn">
                <FaGoogle />
                Google
            </button>
            <button onClick={handleGoogleSignIn} className="btn">
                <FaGithub />
                Github
            </button>
        </div>
    );
};

export default SocialLogin;