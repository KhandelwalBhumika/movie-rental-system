import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
    firstName: yup.string().min(2).required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().min(2).required(),
    contactNumber: yup.string().min(10).max(10).required(),
    role: yup.string().required()
})

export const addMovieSchema = yup.object().shape({
    name: yup.string().required(),
    releaseDate: yup.date().required(),
    genre: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().required(),
    quantity: yup.number().required()
})