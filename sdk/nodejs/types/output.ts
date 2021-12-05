// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";

export interface RemoteConnection {
    /**
     * The address of the resource to connect to.
     */
    host: string;
    /**
     * The password we should use for the connection.
     */
    password?: string;
    /**
     * The port to connect to. Defaults to 22.
     */
    port?: number;
    /**
     * The contents of an SSH key to use for the connection. This takes preference over the password if provided.
     */
    privateKey?: string;
    user?: string;
}
