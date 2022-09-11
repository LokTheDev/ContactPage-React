import React, { useEffect } from 'react';
import { Container, Section } from '../../globalStyles';
import {
	ContentRow,
	TextWrapper,
	TopLine,
	Heading,
	ContentButton,
	Subtitle,
	ImgWrapper,
	Img,
	ContentColumn,
} from './ContentStyles.js';

import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';



export const Content = (props) => {
	const initial = { opacity: 0, y: 30 };
	const animation = useAnimation();
	console.log(props.data)
	const png = ["Shopping", "Shipping", "Security", "Satisfaction","Multitasking","Fast","Communication"]
	const user = props.data;
	const inverse = user.id % 2 ==0? true : false; 
	const reverse = user.id % 2 ==0? true : false; 
	const topLine = {"text":user.username};
	const headline = user.name;
	const description = {"email":user.email, "phone": user.phone};
	const primary = true; 
	const buttonLabel = "Contact Me Now";
	const img = `./assets/${png[Math.floor(Math.random() * 7)]}.png`;
	const alt="alt"

	const { ref, inView } = useInView({ threshold: 0.2 });

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				y: 0,
			});
		}
	}, [inView, animation]);

	return (
		<Section inverse={inverse} ref={ref}>
			<Container>
				<ContentRow reverse={reverse}>
					<ContentColumn>
						<TextWrapper>
							<TopLine
								initial={initial}
								transition={{ delay: 0.3, duration: 0.6 }}
								animate={animation}
							>
								{user.company.name}
							</TopLine>
							<Heading
								initial={initial}
								transition={{ delay: 0.5, duration: 0.6 }}
								animate={animation}
								inverse={inverse}
							>
								{headline}
							</Heading>
							<Subtitle
								initial={initial}
								transition={{ delay: 0.7, duration: 0.6 }}
								animate={animation}
								inverse={inverse}
							>{topLine.text}</Subtitle>
							<Subtitle
								initial={initial}
								transition={{ delay: 0.7, duration: 0.6 }}
								animate={animation}
								inverse={inverse}
							>
								{description.email}
								<hr/>
								{description.phone}

							</Subtitle>
							<ContentButton
								initial={initial}
								transition={{ delay: 1, duration: 0.6 }}
								animate={animation}
								inverse={inverse}
								primary={primary}
							>
								{buttonLabel}
							</ContentButton>
						</TextWrapper>
					</ContentColumn>
					<ContentColumn
						initial={initial}
						transition={{ delay: 0.5, duration: 0.6 }}
						animate={animation}
					>
						<ImgWrapper>
							<Img
								src={img}
								alt={alt}
								whileHover={{ rotate: 2, scale: 1.02 }}
								transition={{ duration: 0.5 }}
							/>
						</ImgWrapper>
					</ContentColumn>
				</ContentRow>
			</Container>
		</Section>
	);
};



// export const Content = (props) => {
// 	let user = props.data
	
// 	return (
// 		<Section >
// 			<Container>
// 				<h1>{user.name}</h1>
// 			</Container>
// 		</Section>
// 	);
// };

