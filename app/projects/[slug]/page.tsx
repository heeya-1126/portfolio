import Portfolio from '../../portfolio';
import { notFound } from 'next/navigation';
import { projects } from '../../projects';
export default async function Project({params}: {params: Promise<{slug:string}>}) {
  const {slug} = await params;
  if (!projects.some(p => p.slug === slug)) notFound();
  return <Portfolio initialSlug={slug} />;
}
