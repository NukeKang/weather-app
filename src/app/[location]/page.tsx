import { getForeCast } from '@/utils/getForeCast';
import HomeButton from '@/components/HomeButton';

type Props = {
  params: {
    location: string;
  };
  searchParams: {
    name: string;
  };
};

export function generateMetadata({ searchParams }: Props) {
  return {
    title: `상세 정보 - ${searchParams.name}`,
    description: `${searchParams.name}의 상세 정보를 알려드립니다.`,
  };
}

export default async function Detail({ params, searchParams }: Props) {
  const name = searchParams.name;
  const res = await getForeCast(params.location);

  return (
    <>
      <h1>{name}의 3일 예보</h1>
      <ul>
        {res.forecast.forecastday.map((day) => (
          <li key={day.date}>
            <span>{day.date}</span> / <span>{day.day.avgtemp_c}</span> /{' '}
            <span>{day.day.condition.text}</span>
          </li>
        ))}
      </ul>
      <HomeButton />
    </>
  );
}
