import mockList from "../mock/MockList"
const {
    addbook,
    AllBooks
  } = require("./Functions.js")
describe("test books crud", ()=>{
    
    test("should return an exception if an error occured", ()=>{           
            expect(()=>AllBooks).toBe(mockList)
        }
    )
    test("should return an exception if an error occured when adding book", ()=>{ 
        const book = {}
        expect(()=>addbook()).toStrictEqual(book)
    }
)
})

