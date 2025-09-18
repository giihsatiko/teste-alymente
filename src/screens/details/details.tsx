import { useDetailsHook } from './details.hook';
import DetailsLayout from './details.layout';

export default function DetailsScreen() {
  const controller = useDetailsHook();

  return <DetailsLayout {...controller} />;
}
