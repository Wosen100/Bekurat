import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

export default function Signout(props: Props) {

  const navigate = useNavigate()

  useEffect(() => {
    localStorage.removeItem('token');
    navigate('/landing/signin');
  }, [navigate]);

  return <div>You have been Signed out</div>;
};


