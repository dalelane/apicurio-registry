/**
 * @license
 * Copyright 2020 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from "react";
import "./artifactList.css";
import {
    Badge,
    DataList,
    DataListAction,
    DataListCell,
    DataListItemCells,
    DataListItemRow
} from '@patternfly/react-core';
import {SearchedArtifact} from "@apicurio/registry-models";
import {Link} from "react-router-dom";
import {ArtifactTypeIcon, PureComponent, PureComponentProps, PureComponentState} from "../../../../components";
import {Services} from "@apicurio/registry-services";

/**
 * Properties
 */
export interface ArtifactNameProps extends PureComponentProps {
    id: string;
    name: string;
}

/**
 * State
 */
// tslint:disable-next-line:no-empty-interface
export interface ArtifactNameState extends PureComponentState {
}


/**
 * Models the list of artifacts.
 */
export class ArtifactName extends PureComponent<ArtifactNameProps, ArtifactNameState> {

    constructor(props: Readonly<ArtifactNameProps>) {
        super(props);
    }

    public render(): React.ReactElement {
        return this.props.name ? (
            <React.Fragment>
                <span className="name">{this.props.name}</span>
                <span className="id">{this.props.id}</span>
            </React.Fragment>
        ) : (
            <React.Fragment>
                <span className="name">{this.props.id}</span>
            </React.Fragment>
        );
    }

    protected initializeState(): ArtifactNameState {
        return {};
    }
}
