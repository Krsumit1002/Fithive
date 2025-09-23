import React from 'react'

const Contact = () => {

    return (
        <main className="flex items-center justify-center overflow-hidden bg-black text-white h-screen">
            <div className="flex-1 hidden lg:block">
                <img src="https://images.unsplash.com/photo-1697135807547-5fa9fd22d9ec?auto=format&fit=crop&q=80&w=3387&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-screen object-cover" />
            </div>
            <div className="py-12 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto">
                <div className="max-w-lg flex-1 mx-auto px-4 text-gray-600">
                    <div>
                        <h3 className="text-gray-500 text-3xl font-semibold sm:text-4xl">
                            Get in touch
                        </h3>
                        <p className="mt-3 ">
                            We’d love to hear from you! Please fill out the form bellow.
                        </p>
                    </div>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-5 mt-12 lg:pb-12"
                    >
                        <div>
                            <label className="font-medium">
                                Full name
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg" placeholder='Drop Your Name'
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg" placeholder='Enter Your Email'
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Message
                            </label>
                            <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg" placeholder='Leave A Message Here...'></textarea>
                        </div>
                        <button 
                            className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Contact
