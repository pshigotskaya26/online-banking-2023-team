import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useActions } from '../../hooks/useActions';
import { useNavigate } from 'react-router-dom';
import UserRolesEnum from '../../types/enums/UserRolesEnum';
import { Simulate } from 'react-dom/test-utils';
import submit = Simulate.submit;

const MAX_FILE_SIZE = 204800;
const MIN_PASS_LENGTH = 6;

const RegistrationForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passRepeat, setPassRepeat] = useState('');
  const [phone, setPhone] = useState(375);
  const [photo, setPhoto] = useState('');
  const [isFormValid, setFormValid] = useState(false);

  const { createUserInfo } = useActions();
  const navigate = useNavigate();

  const imgInput = useRef<HTMLInputElement>(null);
  const showDialog = () => {
    imgInput.current?.click();
  };

  const loadImage = (event: React.ChangeEvent) => {
    if (event.target instanceof HTMLInputElement) {
      const img = event.target.files?.[0];
      if (!img || img.size > MAX_FILE_SIZE) return;

      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        if (typeof result === 'string') {
          setPhoto(result);
        }
      };
      reader.readAsDataURL(img);
    }
  };

  const isNameValid = () => {
    const names = name.split(' ');
    return names.length >= 2 && names.every((name) => name.length >= 3);
  };

  const isEmailValid = () => {
    return email.match(/[^@\s]+@[^@\s]+\.[^@\s]{2,4}/);
  };

  const isPasswordValid = () => {
    return password.length >= MIN_PASS_LENGTH && password === passRepeat;
  };

  const isPhoneValid = () => {
    return `${phone}`.match(/[0-9]{9,}/);
  };

  useEffect(() => {
    const validityResult = !!(
      isNameValid() &&
      isEmailValid() &&
      isPasswordValid() &&
      isPhoneValid()
    );
    setFormValid(validityResult);
  }, [name, email, password, passRepeat, phone]);

  const nameInputClass = () => {
    if (name.length === 0) return 'input-default';
    if (isNameValid()) return 'input-valid';
    return 'input-invalid';
  };

  const emailInputClass = () => {
    if (email.length === 0) return 'input-default';
    if (isEmailValid()) return 'input-valid';
    return 'input-invalid';
  };

  const passwordInputClass = () => {
    if (passRepeat.length === 0) return 'input-default';
    if (isPasswordValid()) return 'input-valid';
    return 'input-invalid';
  };

  const phoneInputClass = () => {
    if (`${phone}`.length === 0) return 'input-default';
    if (isPhoneValid()) return 'input-valid';
    return 'input-invalid';
  };

  const formSubmit = (e: React.MouseEvent) => {
    const userInfo = {
      id: 0,
      name,
      email,
      password,
      phone: '' + phone,
      photo,
      role: UserRolesEnum.CLIENT,
      cards: [],
    };
    createUserInfo(userInfo);
    navigate('/');
  };

  return (
    <div className="relative flex flex-col justify-center min-h-max overflow-hidden p-3">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
          Create account
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Your name
            </label>
            <input
              type="text"
              className={nameInputClass()}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Name Surname"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className={emailInputClass()}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Your password
            </label>
            <input
              type="password"
              className={passwordInputClass()}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Repeat password
            </label>
            <input
              type="password"
              className={passwordInputClass()}
              value={passRepeat}
              onChange={(e) => setPassRepeat(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Phone
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 mt-2 text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                +
              </span>
              <input
                type="tel"
                className={`mt-2 ${phoneInputClass()}`}
                value={phone}
                onChange={(e) => setPhone(parseInt(e.target.value))}
              />
            </div>
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Photo
            </label>
            <div className="flex gap-2 justify-between align-baseline">
              <input
                type="file"
                accept=".jpg, .png"
                className="hidden text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer"
                ref={imgInput}
                onChange={loadImage}
              />
              <div
                className="block w-32 h-32 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                aria-describedby="user_avatar_help"
                onClick={showDialog}
              >
                {photo.length === 0 && <i className="fa fa-plus">Add photo</i>}
                {photo.length > 0 && (
                  <img
                    src={photo}
                    alt="User photo"
                    className="w-full h-full rounded"
                  />
                )}
              </div>
              <div
                className="mt-1 text-sm text-gray-500 dark:text-gray-300 w-3/4"
                id="user_avatar_help"
              >
                <p>
                  A profile picture is useful to confirm your are logged into
                  your account
                </p>
                <p>(Max size 200kb)</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="button"
              className={isFormValid ? 'submit-active' : 'submit-inactive'}
              onClick={formSubmit}
              disabled={!isFormValid}
            >
              Create account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
