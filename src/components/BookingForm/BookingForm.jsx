import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import css from './BookingForm.module.css';

const schema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .max(40, 'Name cannot exceed 40 characters')
      .required('Name is required'),
    
    email: Yup.string()
      .email('Invalid email format')
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address')
      .required('Email is required'),
    
    bookingDate: Yup.date()
      .required('Booking date is required')
      .min(new Date(), 'Booking date cannot be in the past')
      .nullable(),
    
    comment: Yup.string()
  });
const BookingForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema),
      mode: 'onBlur',
    });
  
    const onSubmit = (data) => {
      console.log(data);
      // Тут може бути логіка для відправки форми
      // Наприклад, оновлення сторінки:
      window.location.reload();
    };
  
    return (
        <div className={css.container}>
         <h2 className={css.title}>Book your campervan now</h2>
         <p className={css.text}>Stay connected! We are always ready to help you.</p>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.field}>
          <label htmlFor="name">Name</label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => <input id="name" {...field} />}
          />
          {errors.name && <p className={css.error}>{errors.name.message}</p>}
        </div>
  
        <div className={css.field}>
          <label htmlFor="email">Email</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <input id="email" type="email" {...field} />}
          />
          {errors.email && <p className={css.error}>{errors.email.message}</p>}
        </div>
  
        <div className={css.field}>
          <label htmlFor="bookingDate">Booking Date</label>
          <Controller
            name="bookingDate"
            control={control}
            render={({ field }) => <input id="bookingDate" type="date" {...field} />}
          />
          {errors.bookingDate && <p className={css.error}>{errors.bookingDate.message}</p>}
        </div>
  
        <div className={css.field}>
          <label htmlFor="comment">Comment</label>
          <Controller
            name="comment"
            control={control}
            render={({ field }) => <textarea id="comment" {...field} />}
          />
        </div>
  
        <button type="submit" className={css.button}>Submit</button>
      </form>
      </div>
    );
  };
  
  export default BookingForm;