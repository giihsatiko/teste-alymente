import { useIssuesHook } from './issues.hook';
import IssuesLayout from './issues.layout';

export default function DetailsScreen() {
  const controller = useIssuesHook();

  return <IssuesLayout {...controller} />;
}
