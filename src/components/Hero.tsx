import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Formik, Form, Field, ErrorMessage, FormikHelpers, FieldProps } from 'formik';
import * as Yup from 'yup';
import '../styles/background.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().email('E-mail inválido, o email deve ser como o exemplo:nome@provedor.com.br').required('E-mail é obrigatório'),
  company: Yup.string().required('Empresa é obrigatória'),
  cellphone: Yup.string()
    .matches(/^\d{11}$/, 'Digite apenas números. São esperados 11 dígitos (DDD + número) ex: 11123456789')
    .required('Celular é obrigatório'),
});

const initialValues = {
  name: '',
  email: '',
  company: '',
  cellphone: '',
};

const Hero = () => {
  const handleSubmit = (values: typeof initialValues, { setSubmitting }: FormikHelpers<typeof initialValues>) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="gradient-purple-background">
      <div className="flex flex-col sm:items-center lg:flex-row xl:justify-between 2xl:justify-around gap-12 lg:gap-4 px-[8%] lg:px-[8%] py-12  md:p-10">
        {/* Content */}
        <div className="text-white flex flex-col sm:items-center lg:items-start gap-4 lg:gap-2">
          <div className="mb-4">
            <h2 className="text-2xl font-bold max-w-[600px]">Desenvolvimento e gestão de serviços tecnológicos!</h2>
          </div>

          <div className="flex gap-2">
            <FaArrowRightLong className="text-green-500 h-6 w-6 mt-0.5 lg:mt-0 " />
            <p className="text-sm lg:text-md lg:mt-0.5">Gestão técnica de Programas Setoriais da Qualidade</p>
          </div>
          <div className="flex gap-2">
            <FaArrowRightLong className="text-green-500 h-6 w-6 mt-0.5 lg:mt-0 " />
            <p className="text-sm lg:text-md lg:mt-0.5">Avaliação de produtos inovadores para construção civil</p>
          </div>
          <div className="flex gap-2">
            <FaArrowRightLong className="text-green-500 h-6 w-6 mt-0.5 lg:mt-0 " />
            <p className="text-sm lg:text-md lg:mt-0.5">Realização de ensaios de materiais de construção</p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg text-darkPurple p-4 sm:p-8 max-w-[500px] max-h-[600px]">
          <div>
            <h3 className="font-bold">Informe seus dados para falar com um especialista:</h3>
          </div>
          <div className='my-5'>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
              {({ isSubmitting }) => (
                <Form>
                  <div className='flex flex-col gap-4'>
                    <div className="flex gap-4 justify-between mt-4">
                      <label htmlFor="name" className="label mt-1">Nome:</label>
                      <Field type="text" name="name" id="name" className=" bg-articBlue sm:w-[70%] border-0 rounded-lg p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary focus:outline-none sm:text-sm sm:leading-6" />
                    </div>
                    <ErrorMessage name="name" component="div" className="error-message text-red-500 text-xs mt-1" />

                    <div className="flex gap-4 justify-between">
                      <label htmlFor="email" className="label mt-1">E-mail:</label>
                      <Field type="email" name="email" id="email" className=" bg-articBlue sm:w-[70%] border-0 rounded-lg p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary focus:outline-none sm:text-sm sm:leading-6" />
                    </div>
                    <ErrorMessage name="email" component="div" className="error-message text-red-500 text-xs mt-1" />

                    <div className="flex gap-4 justify-between">
                      <label htmlFor="company" className="label mt-1">Empresa:</label>
                      <Field type="text" name="company" id="company" className=" bg-articBlue sm:w-[70%] border-0 rounded-lg p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary focus:outline-none sm:text-sm sm:leading-6" />
                    </div>
                    <ErrorMessage name="company" component="div" className="error-message text-red-500 text-xs mt-1" />

                    <div className="flex gap-4 justify-between">
                      <label htmlFor="cellphone" className="label mt-1">Telefone:</label>
                      <Field name="cellphone" id="cellphone">
                        {({ field, form }: FieldProps<any>) => (
                          <input
                            {...field}
                            type="tel"
                            maxLength={11}
                            className=" bg-articBlue sm:w-[70%] border-0 rounded-lg p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary focus:outline-none sm:text-sm sm:leading-6"
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, '');
                              form.setFieldValue('cellphone', value);
                            }}
                          />
                        )}
                      </Field>
                    </div>
                    <ErrorMessage name="cellphone" component="div" className="error-message text-red-500 text-xs mt-1" />

                    <div className='flex justify-center font-bold text-white mt-4'>
                      <button type="submit" disabled={isSubmitting} className="submit-button bg-skyBlue w-full py-2.5 mt-4 rounded-lg transition duration-300 ease-in-out hover:bg-blue-700 hover:shadow-md hover:scale-110">
                        Fale com um especialista
                      </button>
                    </div>

                  </div>

                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Hero;
