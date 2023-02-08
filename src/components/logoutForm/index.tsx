import React, { useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useNavigate } from 'react-router-dom';

const LogoutForm: React.FC = () => {
  const { logoutSystem } = useActions();
  const navigate = useNavigate();

  useEffect(() => {
    logoutSystem();
    navigate('/');
  });

  return <div></div>;
};

export default LogoutForm;
