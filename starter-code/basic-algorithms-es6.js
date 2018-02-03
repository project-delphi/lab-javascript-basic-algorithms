//1
const hacker1 = 'Jeff'
//2
console.log(`The driver's name is ${hacker1}`)
//3
const hacker2 = prompt(`What is the navigator's name?`) 
//4
console.log(`The navigator's name is ${hacker2}`)
//5
let diffLength = hacker1.length - hacker2.length
if (diffLength>0) {
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters`)
} else if(diffLength<0) {
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`wow, you both got equally long names, ${hacker1.length} characters!!`)
}
//6
console.log(hacker1.toUpperCase().split().join(' '))
//7
console.log(hacker2.split('').reverse().join())
//8
const lexOrder = hacker1.localeCompare(hacker2)
if (lexOrder<0) {
    console.log(`The driver's name goes first`)
} else if(lexOrder>0) {
    console.log(`Yo, the navigator goes first definitely`)
} else {
    console.log(`What?! You both got the same name?`)
}
//9
const isPalindrome = (phrase) =>{
    let phraseAN = phrase.toLowerCase().replace(/\W/g,'').replace(/\s/g,'')
    const phraseANReverse = phraseAN.split('').reverse().join('')
    if(phraseAN==phraseANReverse){ return true } else { return false}
}

const UserPromptPalindrome = () => {
    const str = prompt(`Please give me a phrase user:`)
    console.log(`You entered this phrase \n ${str}`)
    if(isPalindrome(str)) {
        console.log(`This phrase is a palindrome`)
    } else {
        console.log(`This phrase is not a palindrome`)
    }
}
UserPromptPalindrome()
//10
const loremStr = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra auctor molestie. Cras iaculis, augue vel dapibus consectetur, erat dui sodales neque, eu luctus orci metus non quam. Nunc vehicula sagittis diam et luctus. Donec ac dolor pharetra, congue sem quis, maximus lorem. Ut semper urna at justo mattis euismod. Nam tempor posuere eros, nec porttitor lectus bibendum non. Aliquam ut eros nec erat fringilla porta. In vestibulum dignissim purus, eget hendrerit nunc aliquet et. Aliquam volutpat tincidunt consequat. Aenean vitae ante molestie massa mollis laoreet. Curabitur aliquam augue vitae nulla elementum vehicula. Suspendisse eget turpis at sapien hendrerit ornare quis ut augue. Integer facilisis metus massa, mattis faucibus ex semper eu. Sed in nunc vel arcu hendrerit mattis. Aliquam in imperdiet orci, et volutpat velit. Quisque cursus lacus imperdiet ullamcorper gravida.

Sed ut dui congue, fringilla lacus ut, euismod dui. Maecenas vel turpis urna. Nullam pellentesque leo vitae neque laoreet vehicula. Duis eros leo, placerat nec est id, malesuada dignissim libero. Praesent id venenatis libero, vel mollis sem. Fusce faucibus sem in turpis consectetur venenatis. Praesent euismod arcu est, eget cursus lacus vestibulum sed. Donec sit amet viverra metus. Integer congue est et purus tincidunt pulvinar. Sed tellus nisl, ornare vitae placerat sed, imperdiet non orci. Vivamus vehicula vel tortor in accumsan. Aenean vitae hendrerit nibh.

Ut convallis a nulla sed venenatis. Nam eu aliquam eros. Morbi a imperdiet nulla, et aliquet odio. Pellentesque dictum ipsum eu dui condimentum ultrices. Nulla facilisi. Sed pulvinar, urna eu fringilla aliquet, tellus orci rhoncus dui, vitae pretium dolor velit at ligula. Nunc sem enim, sagittis lobortis suscipit a, lacinia eget felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.` 

const numWords = (str) => {
return str.split(' ').filter(i=>i).length
}
console.log(numWords(loremStr))

const matchedWordCount = (str, word) =>{
return str.split(' ').filter(item => item===word).length
}
console.log(matchedWordCount(loremStr,`et`))
 