import { FC, useEffect, useState } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import styles from './AvailableMeals.module.css';
import { Meal } from '../../store/types';

const AvailableMeals: FC = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${process.env.REACT_APP_DB_URL}/meals.json`
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData: { [key: string]: Meal } = await response.json();

      const loadedMeals: Meal[] = Object.entries(responseData).map(
        ([mealId, mealContent]) => ({
          id: mealId,
          name: mealContent.name,
          description: mealContent.description,
          price: mealContent.price
        })
      );

      setMeals(loadedMeals);
      setIsLoading(false);
    })().catch(error => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={styles.mealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={styles.mealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {meals.map(meal => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
