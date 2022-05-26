import { Grid, Typography } from "@material-ui/core";
import { BackButton } from "../../ui-kit/BackButton";
import PrimaryButton from "../../ui-kit/PrimaryButton";
import { EndScreenStyles } from "./EndScreenStyles";
import RestartButton from "../../Components/RestartButton";
import { CVPListItem } from "../../ui-kit/ListItem";
import { BodyType } from "../../data/calculatorPagesTypes";
import ProgressBar from "../../Components/ProgressBar";

const EndScreen = props => {
    const classes = EndScreenStyles();

    return (
        <Grid container className={classes.grid}>
            {props.progressBar && (
                <Grid container>
                    <ProgressBar currentSectionName={props.currentSectionName} />
                </Grid>
            )}

            <Grid container className={classes.backButton}>
                <BackButton />
            </Grid>
            <Typography variant="h5" className={classes.header}>
                {props.header}
            </Typography>
            <Grid item className={classes.bodyGrid}>
                {props.body &&
                    props.body.map((b, idx) => {
                        switch (b.type) {
                            case BodyType.LIST: {
                                return b.items.map((item, index) => {
                                    return (
                                        <CVPListItem
                                            key={index}
                                            useBulletPoint={true}
                                            text={item}
                                            className={classes.bodyList}
                                        />
                                    );
                                });
                            }
                            case BodyType.PARAGRAPH:
                                return (
                                    <Typography key={idx} variant="body2" className={classes.body}>
                                        {b.text}
                                    </Typography>
                                );
                            case BodyType.HEADING:
                                return (
                                    <Typography key={idx} variant="h5" className={classes.body}>
                                        {b.text}
                                    </Typography>
                                );
                            case BodyType.LINK:
                                return (
                                    <ul>
                                        <li key={idx}>
                                            <a role="button" href={b.href}>{b.text}</a>
                                        </li>
                                    </ul>
                                );
                            default:
                                break;
                        }
                    })}
            </Grid>
            <Grid item className={classes.buttonGrid}>
                {props.buttons.map((b, idx) => {
                    return (
                        <PrimaryButton
                            key={idx}
                            role="button"
                            className={classes.button}
                            text={b.text}
                            href={b.href}
                            target={b.target}
                        />
                    );
                })}
            </Grid>
            <Grid item className={classes.restartButton}>
                {props.showRestartButton && <RestartButton className={classes.button} />}
            </Grid>
            <Grid item className={classes.restartButton}>
                {props.disclaimer && (
                    <Typography variant="caption" className={classes.body}>
                        {props.disclaimer}
                    </Typography>
                )}
            </Grid>
        </Grid>
    );
};

export default EndScreen;
