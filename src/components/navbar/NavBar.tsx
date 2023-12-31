'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import useNavBar from '@/components/navbar/useNavBar';
import NavBarLogo from '@/components/navbar/components/NavBarLogo';
import NavBarCategories from '@/components/navbar/components/NavBarCategories';
import SearchBar from '@/components/navbar/components/SearchBar';
import NavBarListExpanded from '@/components/navbar/components/NavBarListExpanded';
import BackgroundEffect from '@/components/navbar/components/BackgroundEffect';

const navBarTransition = {
	bounce: 0,
	bounceDamping: 0,
	bounceStiffness: 0
};

const NavBar = () => {
	const { navMode, navbarVariants, mainNavbarVariants } = useNavBar();
	const [expanded, setExpanded] = useState<boolean>(false);

	return (
		<>
			<motion.div
				onHoverEnd={() => {
					setExpanded(false);
				}}
				transition={navBarTransition}
				layout
				className='fixed z-10 box-border w-screen pt-4 pb-[0.8rem] px-8 top-0 bg-white'
			>
				<motion.div
					style={navbarVariants}
					layout
					className='flex justify-between items-center'
				>
					<NavBarLogo navMode={navMode} />
					<motion.div
						style={mainNavbarVariants}
						layout
						className='w-screen flex box-border items-center gap-8'
					>
						<NavBarCategories setExpanded={setExpanded} />
						<SearchBar />
					</motion.div>
				</motion.div>
				{expanded ? <NavBarListExpanded /> : null}
			</motion.div>
			<BackgroundEffect expanded={expanded} />
		</>
	);
};

export default dynamic(() => Promise.resolve(NavBar), {
	ssr: false
});
