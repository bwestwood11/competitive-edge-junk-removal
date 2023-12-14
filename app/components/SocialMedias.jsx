import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const SocialMedias = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
              <a href="https://www.facebook.com/CompetitiveEdgeJunk"><FaFacebookF className="hover:text-black/60" /></a> 
              <a href="https://www.instagram.com/competitiveedgejunk/?hl=en"><RiInstagramFill className="hover:text-black/60" /></a> 
    </div>
  )
}

export default SocialMedias