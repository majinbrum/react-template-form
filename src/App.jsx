import { useState } from "react";
import { Template } from "./components/Template/Template.jsx";
import { Form } from "./components/Form/Form.jsx";
import style from "./style.module.css";

function App() {
	const [templateVisibility, setTemplateVisibility] = useState(false);
	const [userInfo, setUserInfo] = useState({
		firstName: "",
		lastName: "",
		email: "",
		city: "",
		message: "",
	});

	return (
		<>
			<main>
				<div className={style.container}>
					<Form setUserInfo={setUserInfo} templateVisibility={templateVisibility} setTemplateVisibility={setTemplateVisibility} />

					{/* TEMPLATE */}
					{templateVisibility && <Template userInfo={userInfo} />}
				</div>

				{/* frontend mentor */}
				<div className={style.attribution}>
					Challenge by <a href='https://www.frontendmentor.io?ref=challenge'>Frontend Mentor</a>. Coded by <a href='https://github.com/majinbrum'>Bruna Alamia</a>.
				</div>
			</main>
		</>
	);
}

export default App;
