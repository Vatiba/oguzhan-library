import React, { useState } from 'react';
// components
import Modal from '@app/components/common/Modal';
import Row from '@app/components/Cards/Row';
import { RowProps } from '@app/components/Cards/Row/Row';

type BookDetailsAudioProps = RowProps & {

}

function BookDetailsAudio(props: BookDetailsAudioProps) {
	const {
		...others
	} = props;

	const [isOpen, setIsOpen] = useState(false);
	return (
		<Modal
			isOpen={isOpen}
			onClose={() => setIsOpen(false)}
		>
			<Row
				{...others}
			/>
		</Modal>
	)
}

export default BookDetailsAudio;
