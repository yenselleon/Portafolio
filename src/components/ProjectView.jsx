import {useDispatch} from 'react-redux';
import {openModal} from "../action/ui";

const ProjectView = ({data}) => {


    const dispatch = useDispatch()


    const handleOpenModal = ()=> {

        dispatch(openModal(data))

    }

  return (

    <div 
        className="col-lg-4 col-md-6 col-sm-12 grid__galeria__proyects"
        onClick={handleOpenModal}
    >
        <img src={data.mainView} alt="proyects" />
    </div>
  );
};

export default ProjectView;
