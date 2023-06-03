import React, { useEffect, useState } from "react";

const imageMimeType = /image\/(png|jpg|jpeg)/i;

const Register = () => {
  const [fileError, setFileError] = useState("");
  const [image, setImage] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);

  const handleFile = (e) => {
    const image = e.target.files[0];
    if (!image?.type.match(imageMimeType)) {
      setFileError("This is not an image");
      console.log();
      return;
    }
    setImage(image);
  };

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (image) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(image);
    }

    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [image]);

  return (
    <section className="bg-gray-100 min-h-screen flex flex-col">
      <div className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <div className="flex items-center gap-x-2 mb-3">
            <div className="h-[50px] w-[50px] rounded-full border">
              {fileDataURL && (
                <img
                  className="rounded-full h-full w-full object-cover"
                  src={fileDataURL}
                  alt=""
                />
              )}
            </div>
            <div>
              <label htmlFor="image">Upload Image</label>
              <input
                onChange={handleFile}
                className="hidden"
                type="file"
                accept=".png, .jpg, .jpeg"
                id="image"
              />
            </div>
          </div>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
          />

          <button
            type="submit"
            className="w-full bg-[#38c172] text-center py-3 rounded bg-green text-white hover:bg-[#1f9d55] focus:outline-none my-1"
          >
            Create Account
          </button>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <a
              className="no-underline border-b border-blue text-blue"
              href="../login/"
            >
              Log in
            </a>
            .
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
