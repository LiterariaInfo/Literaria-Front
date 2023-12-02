import { useSelector } from 'react-redux';
import { selectDirectory } from '../../../redux/slices/articleSlice.ts';
import ArticleList from '../../../components/article-list/ArticleList.tsx';
import MediumArticleCard from '../../../components/cards/MediumArticleCard.tsx';
import { RootState } from '../../../redux/store.ts';
import { useParams } from 'react-router-dom';

const Articles = () => {
	const { categoryID } = useParams();

	const articles = (useSelector((state: RootState) => selectDirectory(state, +categoryID!)) ?? { articles: [] }).articles!;

	return (
		<div className='articles section'>
			<h1 className='main-title'>Perioada Pașoptistă</h1>
			<ArticleList>
				{articles.map((article, index) => (
					<MediumArticleCard article={article} key={index} />
				))}
			</ArticleList>
		</div>
	);
};

export default Articles;
