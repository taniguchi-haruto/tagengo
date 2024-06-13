package com.example.tagengo


import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*


@RestController
@RequestMapping("/")
class CountryController(@Autowired val countryRepository: CountryRepository) {

    @GetMapping("/api/country")
    fun getCountry(): Array<country> {
    return countryRepository.getCountry()
    }

    @PostMapping("/api/users")
    fun userRegistration(@RequestBody countryRequest: countryRequest) {
        return countryRepository.userRegistration(countryRequest)
    }

    @PostMapping("/api/score")
    fun saveScore(@RequestBody countryRequest: countryRequest) {
        return countryRepository.saveScore(countryRequest)
    }


//    @RequestMapping("/todos/")
//    fun findOne(@RequestParam("id") id: Int):Array<Todo> {
//        return todoRepository.findOne()
//    }
//
//    @DeleteMapping("/todos")
//    fun deleateData():String{
//        return "hello"
//    }

}