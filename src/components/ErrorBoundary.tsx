
import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "./ui/Button";
import { Tag } from "./ui/Tag";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
    children?: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }
            return (
                <div style={{
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "100vh",
                    backgroundColor: "#FAFAFA"
                }}>
                    <div className="text-center max-w-md w-full px-6">
                        <div className="mb-8 flex justify-center">
                            <Tag variant="code" className="flex items-center gap-2">
                                <AlertTriangle size={14} className="text-[#1D857E]" />
                                Error Boundary Caught An Exception
                            </Tag>
                        </div>

                        <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight font-inter">
                            Application Error
                        </h2>

                        <p className="text-base text-gray-500 mb-8 font-worksans">
                            {this.state.error?.message || "An unexpected error occurred while rendering this component."}
                        </p>

                        <Button
                            onClick={() => window.location.reload()}
                            variant="default"
                            className="w-full gap-2"
                        >
                            <RefreshCw size={16} className="text-white" />
                            Reload Application
                        </Button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
