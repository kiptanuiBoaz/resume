import React from 'react'

const Progress_bar = ({bgcolor,progress,height}) => {
	
	const Parentdiv = {
		height: height,
		width: '200px',
		backgroundColor: 'whitesmoke',
		borderRadius: 40,
		margin: 10,
		marginBottom: "30px"
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: "#2b71cc",
		borderRadius:40,
		textAlign: 'right'
	}
	
	const progresstext = {
		padding: 10,
		color: 'black',
		fontWeight: 900,
		display: "none"
	}
		
	return (
	<div style={Parentdiv}>
		<div style={Childdiv}>
			<span style={progresstext}>{`${progress}%`}</span>
		</div>
	</div>
	)
}

export default Progress_bar;
