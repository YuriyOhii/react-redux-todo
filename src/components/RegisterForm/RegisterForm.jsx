import { Button } from 'components/Button/Button';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { Box, ErrCaption, Input } from './RegisterForm.styled';
import { useDispatch } from 'react-redux';

const initForm = {
  name: '',
  email: '',
  password: '',
};

const labelId = {
  name: nanoid(),
  email: nanoid(),
  password: nanoid(),
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <div>
      <h1>Please, register!</h1>
      <Formik initialValues={initForm} onSubmit={handleSubmit}>
        <Box>
          <label htmlFor={labelId.name}>Name</label>
          <Input id={labelId.name} type="text" name="name" />
          <ErrCaption name="name" component={'div'} />
          <label htmlFor={labelId.email}>Email</label>
          <Input id={labelId.email} type="email" name="email" />
          <ErrCaption name="email" component={'div'} />
          <label htmlFor={labelId.password}>Password</label>
          <Input id={labelId.password} type="text" name="password" />
          <ErrCaption name="password" component={'div'} />

          <Button type="submit">Register</Button>
        </Box>
      </Formik>
    </div>
  );
};
