    import { IoLayersSharp } from "react-icons/io5";
    import { GrAttachment } from "react-icons/gr";
    import { FaCalendarAlt, FaRegComments } from "react-icons/fa";
    import { TbCalendarDue } from "react-icons/tb";
    import Swal from 'sweetalert2/dist/sweetalert2.js'
    import 'sweetalert2/src/sweetalert2.scss'
    import { useEffect, useRef, useState } from "react";

    const Card = ({newlist}) => {
        const {clientname1, clientname2, clientimage1, clientimage2, description, commentimage1, commentimage2, date } = newlist;


        const formRef = useRef();
        const [files, setFiles] = useState([]);

        useEffect(() => {
            fetch('https://to-do-server-lovat.vercel.app/task')
            .then(res => res.json())
            .then(data => setFiles(data))
        }, [])

        const handlesubmit = (e) => {
            e.preventDefault();
            const form = e.target;
            const file = form.file.value;
            const newfile = {file}
            console.log(newfile);
            fetch(
                "https://to-do-server-lovat.vercel.app/task",
                {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(newfile),
                }
              )
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  if (data.insertedId) {

                    // refress ui
                    const allfiles = [...files, newfile];
                    setFiles(allfiles)
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "File Added Successfully..!",
                        showConfirmButton: false,
                        timer: 1500
                      });
                       // Reset the form
                         formRef.current.reset();
                  }
                });
            
        }

        return (
        <div className="bg-white px-2 py-3 rounded-lg space-y-4">
            {/* user section */}
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <img className="w-7 rounded-full" src={clientimage1} alt="" />
                        <h4 className="text-sm font-medium">{clientname1}</h4>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-7 rounded-full" src={clientimage2} alt="" />
                        <h4 className="text-sm font-medium">{clientname2}</h4>
                    </div>
                </div>
                {/* content section */}
                <div className="flex justify-between">
                    <div className="flex items-center gap-1">
                        <p><IoLayersSharp /></p>
                        <p className="text-sm font-medium text-[#666666]">{description}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-[#F2F4F7] p-1 rounded-lg">
                        <p><TbCalendarDue className="text-[#474747] font-bold" /></p>
                        <p className="text-sm text-[#444343] font-medium">1/2</p>
                    </div>
                </div>
                {/* coment section */}
                <div className="flex justify-between">
                    <img className="w-7 h-8 rounded-full" src={commentimage1} alt="" />
                    <img className="w-7 h-8 rounded-full" src={commentimage2} alt="" />
                    <p className="text-sm text-[#333333] font-bold bg-[#F2F4F7] p-2 rounded-full">12+</p>
                    <p className="text-sm flex items-center gap-2 text-[#302f2f] font-medium"><FaRegComments />15</p>
                    {/* attach button */}
                    <button className="text-sm flex items-center gap-2 text-[#302f2f] font-medium" onClick={()=>document.getElementById('my_modal_4').showModal()}><GrAttachment />{files.length}</button>
                        <dialog id="my_modal_4" className="modal">
                        <div className="modal-box space-y-4">
                            <h3 className="font-bold text-lg">Attach A file</h3>
                            <form onSubmit={handlesubmit} ref={formRef}>
                                <input type="file" name="file" required className="file-input w-full max-w-xs" /> <br />
                                <input className="bg-green-600 text-white font-medium py-2 px-4 rounded-xl mt-2" type="submit"  value="Submit" />
                            </form>
                            <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button, it will close the modal */}
                                <button className="btn text-center items-center">Close</button>
                            </form>
                            </div>
                        </div>
                        </dialog>
                    <p className="text-sm flex items-center gap-2 font-medium text-[#474747]"><FaCalendarAlt className="text-sm text-[#474747]" />{date}</p>
                </div>
                
        </div>
        );
    };

    export default Card;