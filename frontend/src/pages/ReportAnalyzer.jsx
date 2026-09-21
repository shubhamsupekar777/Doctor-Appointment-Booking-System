import React,{useContext,useRef,useState} from "react";
import axios from "axios";
import {AppContext} from "../context/AppContext";

const ReportAnalyzer=()=>{
    const {backendUrl,token}=useContext(AppContext);
    const fileInputRef=useRef(null);
    const [file,setFile]=useState(null);
    const [dragActive,setDragActive]=useState(false);
    const [loading,setLoading]=useState(false);
    const [analysis,setAnalysis]=useState(null);

    const handleFile=(selectedFile)=>{
        if(!selectedFile)return;
        const allowed=["application/pdf","image/jpeg","image/png","image/jpg"];
        if(!allowed.includes(selectedFile.type))return alert("Please upload a PDF, JPG or PNG file.");
        if(selectedFile.size>10*1024*1024)return alert("File size must be less than 10 MB.");
        setFile(selectedFile);
        setAnalysis(null);
    };

    const handleDrop=e=>{
        e.preventDefault();
        setDragActive(false);
        handleFile(e.dataTransfer.files[0]);
    };

    const removeFile=e=>{
        e.stopPropagation();
        setFile(null);
        setAnalysis(null);
        if(fileInputRef.current)fileInputRef.current.value="";
    };

    const analyzeReport=async()=>{
        if(!file)return;
        try{
            setLoading(true);
            setAnalysis(null);
            const formData=new FormData();
            formData.append("report",file);
            const {data}=await axios.post(
                backendUrl+"/api/report/upload",
                formData,
                {headers:{token}}
            );
            if(data.success)setAnalysis(data.report.analysis);
            else alert(data.message||"Failed to analyze report");
        }catch(error){
            console.log(error);
            alert(error.response?.data?.message||"Failed to analyze report");
        }finally{
            setLoading(false);
        }
    };

    const value=item=>item?.value||item?.result||"Not available";
    const name=item=>item?.test||item?.name||"Not available";
    const observation=item=>item?.observation||item?.status||item?.interpretation||"";

    return(
        <div className="max-w-5xl mx-auto">
            <div className="mb-7">
                <h2 className="text-2xl font-semibold text-gray-800">Report Analyzer</h2>
                <p className="text-gray-500 mt-1">Upload your medical report and get a simple explanation of the results.</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-800">Upload Medical Report</h3>
                <p className="text-sm text-gray-500 mb-5">Supported formats: PDF, JPG, JPEG and PNG</p>

                <div
                    onDragOver={e=>{e.preventDefault();setDragActive(true)}}
                    onDragLeave={()=>setDragActive(false)}
                    onDrop={handleDrop}
                    onClick={()=>fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer ${dragActive?"border-[#635BFF] bg-[#F5F6FF]":"border-gray-300 hover:border-[#635BFF]"}`}
                >
                    <div className="text-5xl mb-4">📄</div>
                    <h4 className="text-lg font-medium text-gray-700">{file?file.name:"Upload your medical report"}</h4>
                    <p className="text-sm text-gray-500 mt-2">Drag & drop your file here or click to browse</p>
                    <input ref={fileInputRef} type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={e=>handleFile(e.target.files[0])}/>
                </div>

                {file&&(
                    <div className="mt-5 flex items-center justify-between p-4 rounded-xl bg-[#F5F6FF]">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">📄</span>
                            <div>
                                <p className="text-sm font-medium text-gray-800">{file.name}</p>
                                <p className="text-xs text-gray-500">{(file.size/1024/1024).toFixed(2)} MB</p>
                            </div>
                        </div>
                        <button onClick={removeFile} className="text-sm text-red-500">Remove</button>
                    </div>
                )}

                <div className="flex justify-end mt-6">
                    <button
                        onClick={analyzeReport}
                        disabled={!file||loading}
                        className={`px-6 py-3 rounded-xl font-medium ${file&&!loading?"bg-[#635BFF] text-white":"bg-gray-200 text-gray-400 cursor-not-allowed"}`}
                    >
                        {loading?"Analyzing...":"Analyze Report"}
                    </button>
                </div>
            </div>

            {loading&&(
                <div className="mt-6 bg-white border rounded-2xl p-8 text-center">
                    <div className="w-10 h-10 border-4 border-gray-200 border-t-[#635BFF] rounded-full animate-spin mx-auto"/>
                    <p className="text-gray-600 mt-4">Analyzing your report...</p>
                </div>
            )}

            {analysis&&!loading&&(
                <div className="mt-6 bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">🧠 AI Report Analysis</h3>

                    {analysis.summary&&(
                        <div className="mb-6">
                            <h4 className="font-semibold text-gray-800">Summary</h4>
                            <p className="text-gray-600 mt-2 leading-relaxed">{analysis.summary}</p>
                        </div>
                    )}

                    {analysis.abnormalValues?.length>0&&(
                        <div className="mb-6">
                            <h4 className="font-semibold text-red-600 mb-3">⚠ Abnormal Values</h4>
                            <div className="space-y-2">
                                {analysis.abnormalValues.map((item,i)=>(
                                    <div key={i} className="p-3 rounded-lg bg-red-50 border border-red-100 text-sm text-gray-700">
                                        <b>{name(item)}</b>: {value(item)} — {observation(item)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {analysis.normalValues?.length>0&&(
                        <div className="mb-6">
                            <h4 className="font-semibold text-green-600 mb-3">✓ Normal Values</h4>
                            <div className="space-y-2">
                                {analysis.normalValues.map((item,i)=>(
                                    <div key={i} className="p-3 rounded-lg bg-green-50 border border-green-100 text-sm text-gray-700">
                                        <b>{name(item)}</b>: {value(item)} — {observation(item)||"Within reference range"}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {analysis.explanation&&(
                        <div className="mb-6">
                            <h4 className="font-semibold text-gray-800">Explanation</h4>
                            <p className="text-gray-600 mt-2 leading-relaxed">{analysis.explanation}</p>
                        </div>
                    )}

                    {analysis.attentionPoints?.length>0&&(
                        <div className="mb-6">
                            <h4 className="font-semibold text-orange-600 mb-3">⚕ Points to Discuss With Doctor</h4>
                            <ul className="space-y-2 text-gray-600">
                                {analysis.attentionPoints.map((x,i)=><li key={i}>• {x}</li>)}
                            </ul>
                        </div>
                    )}

                    {analysis.doctorQuestions?.length>0&&(
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Questions for Your Doctor</h4>
                            <ul className="space-y-2 text-gray-600">
                                {analysis.doctorQuestions.map((x,i)=><li key={i}>• {x}</li>)}
                            </ul>
                        </div>
                    )}

                    <p className="text-xs text-gray-400 text-center mt-6 pt-4 border-t">
                        This tool provides informational explanations and does not replace professional medical advice.
                    </p>
                </div>
            )}

            <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white border rounded-xl p-5">
                    <div className="text-2xl mb-3">🔍</div>
                    <h4 className="font-semibold">Extract Results</h4>
                    <p className="text-sm text-gray-500 mt-1">Important information is extracted from your report.</p>
                </div>
                <div className="bg-white border rounded-xl p-5">
                    <div className="text-2xl mb-3">🧠</div>
                    <h4 className="font-semibold">AI Explanation</h4>
                    <p className="text-sm text-gray-500 mt-1">Medical terms and results are explained simply.</p>
                </div>
                <div className="bg-white border rounded-xl p-5">
                    <div className="text-2xl mb-3">📋</div>
                    <h4 className="font-semibold">Report Summary</h4>
                    <p className="text-sm text-gray-500 mt-1">Get a clear summary of important findings.</p>
                </div>
            </div>
        </div>
    );
};

export default ReportAnalyzer;