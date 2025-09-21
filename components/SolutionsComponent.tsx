'use client';
import { 
	Factory, Truck, GraduationCap, Utensils, ShoppingBag, BedDouble, 
	HeartPulse, Building2, Dumbbell, Calendar, Landmark, Laptop 
} from 'lucide-react';
import { FeatureCard } from './blocks/grid-feature-cards';
import { motion, useReducedMotion } from 'framer-motion';

const features = [
	{
		title: 'TVManufacturing',
		icon: Factory,
		description: 'Производство',
	},
	{
		title: 'TVLogistics & Transportation',
		icon: Truck,
		description: 'Логистика и транспорт',
	},
	{
		title: 'TVEducation',
		icon: GraduationCap,
		description: 'Образование',
	},
	{
		title: 'TVFood & Beverages',
		icon: Utensils,
		description: 'Еда и напитки',
	},
	{
		title: 'TVRetail',
		icon: ShoppingBag,
		description: 'Розничная торговля',
	},
	{
		title: 'TVHospitality',
		icon: BedDouble,
		description: 'Гостиничный бизнес',
	},
	{
		title: 'TVHealthcare',
		icon: HeartPulse,
		description: 'Здравоохранение',
	},
	{
		title: 'TVOffices',
		icon: Building2,
		description: 'Офисы',
	},
	{
		title: 'TVFitness, Leisure & Culture',
		icon: Dumbbell,
		description: 'Фитнес, досуг и культура',
	},
	{
		title: 'TVEvent Management',
		icon: Calendar,
		description: 'Организация мероприятий',
	},
	{
		title: 'TVCommercial Real Estate',
		icon: Landmark,
		description: 'Коммерческая недвижимость',
	},
	{
		title: 'TVTechnology & B2B Provider',
		icon: Laptop,
		description: 'Технологии и B2B-провайдеры',
	},
];

export default function SolutionsComponent() {
	return (
		<section className="py-16 md:py-32">
			<div className="mx-auto w-full max-w-5xl space-y-8 px-4">
				<AnimatedContainer className="mx-auto max-w-3xl text-center">
					<h2 className="text-3xl font-bold tracking-wide text-balance md:text-4xl lg:text-5xl xl:font-extrabold">
						Индивидуальные решения для вашей отрасли
					</h2>
					{/* <p className="text-muted-foreground mt-4 text-sm tracking-wide text-balance md:text-base">
						Everything you need to build fast, secure, scalable apps.
					</p> */}
				</AnimatedContainer>

				<AnimatedContainer
					delay={0.4}
					className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2 md:grid-cols-3"
				>
					{features.map((feature, i) => (
						<FeatureCard key={i} feature={feature} />
					))}
				</AnimatedContainer>
			</div>
		</section>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: React.ComponentProps<typeof motion.div>['className'];
	children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
