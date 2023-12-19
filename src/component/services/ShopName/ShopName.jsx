/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { tagsRemove, tagsSelected } from "../../../redux/features/filter/filterSlice";


const ShopName = ({seller}) => {

    const dispatch=useDispatch()
    const {tags}=useSelector(state=> state.filter)
    const name=seller?.shop
console.log(seller);
    const isSelected=tags.includes(name)?true:false


    const style= isSelected ? 'px-7 py-3 w-52 text-white font-medium bg-red-500 rounded-md mt-2 max-sm:text-xs max-sm:w-full':'px-7 py-3 w-52 text-white font-medium bg-green-500 rounded-md mt-2 max-sm:text-xs max-sm:w-full'
  const  handleSelect=()=>{
     if(isSelected){
         dispatch(tagsRemove(name))
      }else{
        dispatch(tagsSelected(name))
      }
  }
    return (
        <div>
   <div className='flex-col   text-center'>
        {
          seller.shop?<><button onClick={handleSelect} className={style} >{seller?.shop}</button></>:" "
        }
        </div>
        </div>
    );
};

export default ShopName;