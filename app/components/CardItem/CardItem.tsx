import Image from 'next/image'
import './CardItem.css'

type TCardItemProps = {
	src: string;
	title: string;
	content: string;
}

const CardItem = ({ src, title, content }: TCardItemProps) => {
	return (
		<div className='card-wrapper block overflow-hidden relative rounded-2xl shadow-lg'>
			<div className='card-img relative w-full h-[275px]'>
				<Image
					className='object-cover'
					src={src} alt={title} fill />
			</div>
			<div className='card-details text-base p-5 z-[3] text-white absolute bottom-0 left-0'>
				<span className='card-title text-xl delay-[150ms] '>{title}</span>
				<span className='card-content text-base mt-1  delay-[250ms]'>{content}</span>
			</div>
		</div>
	)
}

export default CardItem;
