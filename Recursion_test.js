<script>

let categories = [
{id: 'god', 'parent': null},
{id: 'human', 'parent': 'god'},

{id: 'man', 'parent': 'human'},
{id: 'woman', 'parent': 'human'},

{id: 'grandfather', 'parent': 'man'},
{id: 'father', 'parent': 'man'},
{id: 'son', 'parent': 'man'},

{id: 'grandmother', 'parent': 'woman'},
{id: 'mother', 'parent': 'woman'},
{id: 'daughter', 'parent': 'woman'}
]

let makeTree = (categories, parent) => {
	let node = {}
  categories
  	.filter(c => c.parent === parent)
    .forEach(c => 
    node[c.id] = makeTree(categories, c.id) )
  return node 
}

document.write{
	JSON.stringify(
		makeTree(categories, null)
    , null, 2)
    )

/*
{
	god: {
  	human: {
     	man: {
      	'grandfather': null
      	'father': null
      	'son': null     
      },
     	woman: {
     	 	grandmother: null
      	mother: null
      	daughter: null      
      }
    }  
	}
}
*/

</script>
