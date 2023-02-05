import ClientLayout from "../../layouts/client";
import React, {useState} from 'react';
import PageTitle from '../../components/pageTitle';

const NewCardPage = () => {
	return (
		<ClientLayout>
			<PageTitle title={"Create new card"} />
			<p>Our form</p>
		</ClientLayout>
	);
};

export default NewCardPage;