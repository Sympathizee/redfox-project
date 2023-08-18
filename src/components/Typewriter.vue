<template>
	<v-container :style="{color}" align="left" class="ml-10">
		<span class="eras-bold fs-head">{{ prependBold }}</span><span class="eras fs-head">{{ prependMed }}</span>
		<span class="ml-4 eras fs-type" id="pointer">{{ typer }}</span>
	</v-container>
</template>

<script setup>
	import { ref, onMounted } from 'vue';
	import router from '@/router';
	const props = defineProps({
		prependBold: String,
		prependMed: String,
		type: String,
		color: String,
		cursor: {
			type: Boolean,
			default: true
		}
	})
	// index pointer
	var cIdx = 0;
	var typer = ref('');
	var typeDelay = 100;
	var textArr = props.type === 'redfox'? 
	[
		'group', 
		'elegance', 
		'experience', 
		'quality', 
		'symphony', 
		"artistry",
		"exquisite",
		"sophistication",
		"craftsmanship",
		"prestige",
		"aesthetics",
		"refinement",
		"luxury",
		"perfection",
		"curation",
		"mastery",
		"eloquence",
		"sublime",
		"glamour",
		"distinction",
		"redefinition",
		"echelon",
		"innovation",
		"resplendent",
		"grandeur",
		"serenity",
		"legacy",
		"artisanal",
		"finery",
		"ethereal",
		"harmonious",
	] 
	: 
	['group', props.type];
	var currentWord = 1;
	var typing = false;
	var exiting = false;
	var newPath = null;
	// function to type

	function changeRoute(path){
		exiting = true;
		newPath = path;
		eraseText();
	}

	defineExpose({
		changeRoute
	})

	function typeText(text){
		//if pointer is not at the end
		if(cIdx !== text.length && !exiting){
			typing = true;
			typer.value += text.charAt(cIdx);
			cIdx += 1;
			setTimeout(typeText, typeDelay, text);
		}else{
			var home = 1;
			if(props.type === 'redfox') home = 0
			typing = false;
			setTimeout(eraseText, typeDelay + 2000 + (3000 * currentWord * home));
		}
	}
	// function to erase
	function eraseText(){
		//if pointer is not at the end
		if(cIdx > 0){
			typing = true;
			typer.value = typer.value.substring(0,cIdx-1);
			cIdx -= 1;
			setTimeout(eraseText, exiting? 50 : typeDelay);
		}else{
			typing = false;
			if(exiting && newPath){
				exiting = false;
				router.push(newPath);
			}
			if(props.type === 'redfox'){
				var arrLen = textArr.length;
				var newWord = Math.floor(Math.random() * arrLen);
				currentWord = currentWord === newWord? newWord == arrLen-1? newWord - 1 : newWord + 1 : newWord
			}else{
				currentWord = currentWord > 0? 0 : 1;
			}
			var text = textArr[currentWord];
			setTimeout(typeText, typeDelay, text);
		}
	}
	// function appearPointer(){
	// 	pointer.style.borderRight = "5px solid white";
	// 	setTimeout(removePointer, 500);
	// }
	// function removePointer(){
	// 	if(!typing){
	// 		pointer.style.borderRight = "5px solid transparent";
	// 	}
	// 	setTimeout(appearPointer, 500);
	// }

	onMounted(() => {
		// appearPointer();
		if(props.type !== 'redfox'){
			setTimeout(typeText, typeDelay, props.type);
		}else{
			setTimeout(typeText, typeDelay, textArr[Math.floor(Math.random() * textArr.length)]);
		}
	});
</script>
<style scoped>
	/* #pointer{
		border-right: 5px solid white;
		padding-right: 5px;
		letter-spacing: 3px;
	} */
	.fs-head{
		font-size: 72px;
	}
	.fs-type{
		font-size: 60px;
	}
</style>