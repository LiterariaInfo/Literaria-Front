import { Article } from '@/lib/models';
import SmallArticleCard from '@/components/cards/SmallArticleCard';
import LargeArticleCard from '@/components/cards/LargeArticleCard';
import SpotlightCardMobile from '@/components/cards/SpotlightCardMobile';

export default () => {
	const articles: Article[] = [
		{
			id: 0,
			title:
				'Pasoptism Pasoptism Pasoptism Pasoptism Pasoptism Pasoptism Pasoptism Pasoptism Pasoptism Pasoptism',
			author:
				'gigel gigel gigel gigel gigel gigel gigel gigel gigel gigel gigel gigel gigel gigel gigel ',
			image: 'http://localhost:3000/images/art.jpg',
			createdAt: new Date()
		},
		{
			id: 1,
			title: 'Mircea Cristea Mananca Papuci cu canguri',
			author: 'gigel',
			image: 'http://localhost:3000/images/art.jpg',
			createdAt: new Date()
		},
		{
			id: 2,
			title: 'Pasoptism',
			author: 'gigel',
			image: 'http://localhost:3000/images/art.jpg',
			createdAt: new Date()
		}
	];

	return (
		<section className='section flex-col pt-20 pb-12'>
			<h1 className='text-center mb-8 main-title'>Articole recomandate</h1>
			<div className='flex grow w-full box-border overflow-hidden gap-[2%] px-[2%] py-0 max-[899px]:hidden'>
				<SmallArticleCard className='w-[30%]' article={articles[1]} />
				<LargeArticleCard article={articles[0]} />
				<SmallArticleCard className='w-[24%]' article={articles[2]} />
			</div>
			<div className='flex flex-col grow w-full box-border overflow-hidden gap-3 px-4 py-0 min-[900px]:hidden'>
				<LargeArticleCard article={articles[0]} />
				<div className='flex gap-3'>
					<SpotlightCardMobile className='w-0 grow' article={articles[1]} />
					<SpotlightCardMobile className='w-0 grow' article={articles[2]} />
				</div>
			</div>
		</section>
	);
};
