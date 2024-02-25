import { Textarea } from '../../../ui/textarea'
import { Button } from '../../../ui/button'
import { Star } from 'lucide-react'
import { useState } from 'react'

const CompanyReviewForm = () => {
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState<undefined | number>(undefined);
    const stars = Array(5).fill(0);


    return (
        <div className="shadow rounded-md bg-white border rounded-xl p-5">
            <form>
                <p className="text-xl font-semibold cursor-pointer transition-all hover:text-black">
                    Add Review
                </p>
                <div className='mt-3 flex'>
                    <p className="text-md font-bold flex-1">Ratings: </p>

                    {
                        stars.map((_, index) => (
                            <Star color='grey' onClick={() => setCurrentValue(index + 1)} onMouseOver={() => setHoverValue(index + 1)} onMouseOut={() => setHoverValue(undefined)} className='cursor-pointer' fill={(hoverValue || currentValue) > index ? 'orange' : 'white'}
                            />
                        ))
                    }
                </div>
                <Textarea className="h-40 px-3 text-sm py-1 mt-5 outline-none border-gray-300 w-full resize-none border rounded-lg placeholder:text-sm" placeholder="Add your comments here"></Textarea>

                <div className="flex justify-between mt-5">
                    <p className="text-sm  ">Enter atleast 15 characters</p>
                    <Button type='submit' className="">
                        Submit review
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default CompanyReviewForm